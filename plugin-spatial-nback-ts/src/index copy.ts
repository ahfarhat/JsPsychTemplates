import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";

import { version } from "../package.json";

const info = <const>{
  name: "plugin-spatial-nback-ts",
  version: version,
  parameters: {
      /** Number of rows in the spatial grid */
      rows: {
        type: ParameterType.INT,
        default: 3,
      },
      /** Number of columns in the spatial grid */
      cols: {
        type: ParameterType.INT,
        default: 3,
      },
      /** Size of each cell in pixels */
      cell_size: {
        type: ParameterType.INT,
        default: 100,
      },
      /** N-back level (how many trials back to compare) */
      n_back_level: {
        type: ParameterType.INT,
        default: 1,
      },
      /** Total number of trials in the task */
      total_trials: {
        type: ParameterType.INT,
        default: 5,
      },
      /** Percentage of trials that should be targets (0-100) */
      target_percentage: {
        type: ParameterType.FLOAT,
        default: 40,
      },
      /** Duration each stimulus is displayed (ms) */
      stimulus_duration: {
        type: ParameterType.INT,
        default: 500,
      },
      /** Inter-stimulus interval (ms) */
      isi_duration: {
        type: ParameterType.INT,
        default: 2000,
      },
      /** Whether to show feedback after each response */
      show_feedback: {
        type: ParameterType.BOOL,
        default: true,
      },
      /** Whether to show feedback when there is no response */
      showFeedbackNoResponse: {
        type: ParameterType.BOOL,
        default: false,
      },
      /** Whether to show feedback border around the grid */
      show_feedback_border: {
        type: ParameterType.BOOL,
        default: true,
      },
      /** Duration of feedback display (ms) */
      feedback_duration: {
        type: ParameterType.INT,
        default: 500,
      },
      /** Whether to show progress indicator */
      progress_bar: {
        type: ParameterType.BOOL,
        default: true,
      },
      /** Text for the response button */
      button_text: {
        type: ParameterType.STRING,
        default: "MATCH",
      },
      /** Color of the stimulus square */
      stimulus_color: {
        type: ParameterType.STRING,
        default: "#0066cc",
      },
      /** Color of correct feedback border */
      correct_color: {
        type: ParameterType.STRING,
        default: "#00cc00",
      },
      /** Color of incorrect feedback border */
      incorrect_color: {
        type: ParameterType.STRING,
        default: "#cc0000",
      },
      /** Instructions to display above the grid */
      instructions: {
        type: ParameterType.STRING,
        default: "Click MATCH when the current position matches the position from {n} trials ago.",
      },
    },
    data: {
      /** Array of all stimulus positions (row, col) for each trial */
      stimulus_positions: {
        type: ParameterType.COMPLEX,
      },
      /** Array of whether each trial was a target */
      target_sequence: {
        type: ParameterType.COMPLEX,
      },
      /** Array of participant responses for each trial */
      responses: {
        type: ParameterType.COMPLEX,
      },
      /** Array of response times for each trial */
      response_times: {
        type: ParameterType.COMPLEX,
      },
      /** Array of accuracy for each trial */
      accuracy: {
        type: ParameterType.COMPLEX,
      },
      /** Overall accuracy percentage */
      overall_accuracy: {
        type: ParameterType.FLOAT,
      },
      /** Hit rate (correct responses to targets) */
      hit_rate: {
        type: ParameterType.FLOAT,
      },
      /** False alarm rate (incorrect responses to non-targets) */
      false_alarm_rate: {
        type: ParameterType.FLOAT,
      },
      /** Total task duration in milliseconds */
      total_duration: {
        type: ParameterType.INT,
      },
    },
  // When you run build on your plugin, citations will be generated here based on the information in the CITATION.cff file.
  citations: '__CITATIONS__',
};

type Info = typeof info;

interface Position {
  row: number;
  col: number;
}

/**
 * **plugin-spatial-nback-ts**
 *
 * spatial grid n-back task
 *
 * @author A. Hunter Farhat
 * @see {@link /plugin-spatial-nback-ts/README.md}}
 */
class SpatialNbackTsPlugin implements JsPsychPlugin<Info> {
  static info = info;

  constructor(private jsPsych: JsPsych) {}

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    // Initialize task variables
    let current_trial = 0;
    let stimulus_positions: Position[] = [];
    let target_sequence: boolean[] = [];
    let responses: boolean[] = [];
    let response_times: (number | null)[] = [];
    let accuracy: boolean[] = [];
    let task_start_time = performance.now();
    let trial_start_time: number;
    let response_allowed = false;
    let stimulus_timeout: number;
    let isi_timeout: number;

    // Generate stimulus sequence with targets
    const generateSequence = (trial_params: TrialType<Info>): void => {
      const total_positions = trial_params.rows * trial_params.cols;
      const n_targets = Math.round((trial_params.target_percentage / 100) * trial_params.total_trials);
      
      // Generate random positions for first n trials
      for (let i = 0; i < trial_params.n_back_level; i++) {
        stimulus_positions.push({
          row: Math.floor(Math.random() * trial_params.rows),
          col: Math.floor(Math.random() * trial_params.cols)
        });
        target_sequence.push(false);
      }

      // Generate remaining trials with targets
      let targets_placed = 0;
      for (let i = trial_params.n_back_level; i < trial_params.total_trials; i++) {
        let is_target = false;
        
        if (targets_placed < n_targets && Math.random() < 0.5) {
          // Make this a target trial
          stimulus_positions.push({
            row: stimulus_positions[i - trial_params.n_back_level].row,
            col: stimulus_positions[i - trial_params.n_back_level].col
          });
          is_target = true;
          targets_placed++;
        } else {
          // Generate non-target position
          let new_position: Position;
          do {
            new_position = {
              row: Math.floor(Math.random() * trial_params.rows),
              col: Math.floor(Math.random() * trial_params.cols)
            };
          } while (
            new_position.row === stimulus_positions[i - trial_params.n_back_level].row &&
            new_position.col === stimulus_positions[i - trial_params.n_back_level].col
          );
          stimulus_positions.push(new_position);
        }
        
        target_sequence.push(is_target);
      }
    };

    const createDisplay = (trial_params: TrialType<Info>): void => {
      let html = `
        <div id="nback-container" style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
          padding: 20px;
        ">`;
      
      // Combined Instructions and Progress bar container
      const instructions_text = trial_params.instructions.replace('{n}', trial_params.n_back_level.toString());
      html += `<div id="nback-header" style="
        position: absolute;
        top: 10vh;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 520px;
        text-align: center;
        z-index: 10;
      ">`;
      
      // Instructions
      html += `<div id="nback-instructions" style="
        font-size: clamp(14px, 2vmin, 18px);
        margin-bottom: 20px;
      ">${instructions_text}</div>`;
      
      // Progress bar (if enabled)
      if (trial_params.progress_bar) {
        html += `<div id="nback-progress-container" style="
          width: 100%;
        ">`;
        html += `<div style="
          background-color: #e0e0e0;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        ">`;
        html += `<div id="nback-progress-bar" style="
          background-color: #4CAF50;
          height: 100%;
          width: 0%;
          transition: width 0.3s;
        "></div>`;
        html += '</div>';
        html += `<div id="nback-progress-text" style="
          font-size: clamp(12px, 1.5vmin, 16px);
          margin-top: 5px;
        ">Trial 0 of ${trial_params.total_trials}</div>`;
        html += '</div>';
      }
      
      html += '</div>'; // Close combined header container

      // Calculate grid size to fit screen
      const grid_size = Math.min(50, 80 / Math.max(trial_params.rows, trial_params.cols));
      const cell_size = `${grid_size / Math.max(trial_params.rows, trial_params.cols)}vmin`;

      // Grid - centered and responsive
      html += `<div id="nback-grid" style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #000;
        box-sizing: border-box;
        display: inline-block;
        z-index: 5;
      ">`;
      
      for (let row = 0; row < trial_params.rows; row++) {
        html += '<div style="display: flex;">';
        for (let col = 0; col < trial_params.cols; col++) {
          html += `<div id="cell-${row}-${col}" style="
            width: ${cell_size};
            height: ${cell_size};
            border: 1px solid #ccc;
            background-color: white;
            box-sizing: border-box;
            min-width: ${Math.max(40, trial_params.cell_size * 0.5)}px;
            min-height: ${Math.max(40, trial_params.cell_size * 0.5)}px;
          "></div>`;
        }
        html += '</div>';
      }
      html += '</div>';

      // Response button - fixed position at bottom
      html += `<div id="nback-button-container" style="
        position: absolute;
        bottom: 15vh;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      ">`;
      html += `<button id="nback-response-btn" style="
        font-size: clamp(18px, 3vmin, 26px);
        padding: clamp(18px, 2.5vmin, 30px) clamp(35px, 5vmin, 60px);
        background-color: #2196F3;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.2s;
      " disabled>${trial_params.button_text}</button>`;
      html += '</div>';
      
      // Feedback area - fixed position
      html += `<div id="nback-feedback" style="
        position: absolute;
        bottom: 8vh;
        left: 50%;
        transform: translateX(-50%);
        height: 40px;
        font-size: clamp(14px, 2vmin, 20px);
        font-weight: bold;
        text-align: center;
        z-index: 10;
        width: 80%;
      "></div>`;
      
      html += '</div>';
      
      display_element.innerHTML = html;

      // Add button hover effects
      const button = document.getElementById('nback-response-btn') as HTMLButtonElement;
      button.addEventListener('mouseenter', () => {
        if (!button.disabled) {
          button.style.backgroundColor = '#1976D2';
          button.style.transform = 'translateY(-2px)';
        }
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#2196F3';
        button.style.transform = 'translateY(0)';
      });

      // Add button event listener
      button.addEventListener('click', handleResponse);
    };

    const startTrial = (): void => {
      if (current_trial >= trial.total_trials) {
        endTask();
        return;
      }

      // Update progress
      if (trial.progress_bar) {
        const progress = ((current_trial + 1) / trial.total_trials) * 100;
        const progressBar = document.getElementById('nback-progress-bar') as HTMLElement;
        const progressText = document.getElementById('nback-progress-text') as HTMLElement;
        progressBar.style.width = progress + '%';
        progressText.textContent = `Trial ${current_trial + 1} of ${trial.total_trials}`;
      }

      // Clear previous stimulus and feedback
      clearGrid();
      const feedbackDiv = document.getElementById('nback-feedback') as HTMLElement;
      feedbackDiv.textContent = '';
      
      // Show stimulus
      const position = stimulus_positions[current_trial];
      const cell = document.getElementById(`cell-${position.row}-${position.col}`) as HTMLElement;
      cell.style.backgroundColor = trial.stimulus_color;

      // Enable response
      response_allowed = true;
      trial_start_time = performance.now();
      const responseButton = document.getElementById('nback-response-btn') as HTMLButtonElement;
      responseButton.disabled = false;

      // Set timeout to hide stimulus
      stimulus_timeout = window.setTimeout(() => {
        cell.style.backgroundColor = 'white';
        
        // Set timeout for ISI
        isi_timeout = window.setTimeout(() => {
          if (response_allowed) {
            handleNoResponse();
          }
        }, trial.isi_duration);
      }, trial.stimulus_duration);
    };

    const handleResponse = (): void => {
      if (!response_allowed) return;

      response_allowed = false;
      const response_time = performance.now() - trial_start_time;
      const is_target = target_sequence[current_trial];
      const is_correct = is_target;

      // Record response
      responses.push(true);
      response_times.push(response_time);
      accuracy.push(is_correct);

      // Clear timeouts
      clearTimeout(stimulus_timeout);
      clearTimeout(isi_timeout);

      // Show feedback
      showFeedback(is_correct, response_time);
    };

    const handleNoResponse = (): void => {
      if (!response_allowed) return;

      response_allowed = false;
      const is_target = target_sequence[current_trial];
      const is_correct = !is_target;

      // Record no response
      responses.push(false);
      response_times.push(null);
      accuracy.push(is_correct);

      showFeedback(is_correct, null);
    };

    const showFeedback = (is_correct: boolean, response_time: number | null): void => {
      // if no feedback is shown, just proceed to next trial
      if (!trial.show_feedback && !trial.show_feedback_border) return nextTrial();

      // Disable the button during feedback to prevent user interaction until the feedback is complete
      const button = document.getElementById('nback-response-btn') as HTMLButtonElement;
      button.disabled = true;
      button.style.opacity = '0.6';

      //if there is no response and feedback must not be shown for no response,
      // match feedback speed and then proceed to next trial
      // this makes the task's speed consistent, even if the participant does not respond
      if (response_time === null && !trial.showFeedbackNoResponse) {
        setTimeout(() => {
          nextTrial();
          button.style.opacity = '1';
        }, trial.feedback_duration);
        return;
      }
      
      //initialize feedback elements
      const grid = document.getElementById('nback-grid') as HTMLElement;
      const feedback_div = document.getElementById('nback-feedback') as HTMLElement;

      // Show border feedback - keep same total width, change style and color
      if (trial.show_feedback_border) {
        grid.style.border = `6px solid ${is_correct ? trial.correct_color : trial.incorrect_color}`;
      }

      // Show text feedback
      if (trial.show_feedback) {
        let feedback_text = is_correct ? 'Correct!' : 'Incorrect!';
        if (response_time !== null) {
          feedback_text += ` (${Math.round(response_time)}ms)`;
        }
        feedback_div.textContent = feedback_text;
        feedback_div.style.color = is_correct ? trial.correct_color : trial.incorrect_color;
      }

      // Wait for feedback duration before proceeding
      setTimeout(() => {
        grid.style.border = '2px solid #000';
        feedback_div.textContent = '';
        button.style.opacity = '1';
        nextTrial();
      }, trial.feedback_duration);
    };

    const nextTrial = (): void => {
      current_trial++;
      setTimeout(startTrial, 200); // Small delay between trials
    };

    const clearGrid = (): void => {
      for (let row = 0; row < trial.rows; row++) {
        for (let col = 0; col < trial.cols; col++) {
          const cell = document.getElementById(`cell-${row}-${col}`) as HTMLElement;
          cell.style.backgroundColor = 'white';
        }
      }
    };

    const endTask = (): void => {
      const total_duration = performance.now() - task_start_time;
      
      // Calculate performance metrics
      const hits = accuracy.filter((acc, i) => target_sequence[i] && acc).length;
      const false_alarms = accuracy.filter((acc, i) => !target_sequence[i] && !acc).length;
      const total_targets = target_sequence.filter(t => t).length;
      const total_non_targets = target_sequence.filter(t => !t).length;
      
      const hit_rate = total_targets > 0 ? hits / total_targets : 0;
      const false_alarm_rate = total_non_targets > 0 ? false_alarms / total_non_targets : 0;
      const overall_accuracy = accuracy.filter(a => a).length / accuracy.length;

      // Prepare trial data
      const trial_data = {
        stimulus_positions: stimulus_positions,
        target_sequence: target_sequence,
        responses: responses,
        response_times: response_times,
        accuracy: accuracy,
        overall_accuracy: overall_accuracy,
        hit_rate: hit_rate,
        false_alarm_rate: false_alarm_rate,
        total_duration: Math.round(total_duration)
      };

      // Clear display
      display_element.innerHTML = '';

      // End trial
      this.jsPsych.finishTrial(trial_data);
    };

    // Initialize the task
    generateSequence(trial);
    createDisplay(trial);
    startTrial();
  }
}

export default SpatialNbackTsPlugin;