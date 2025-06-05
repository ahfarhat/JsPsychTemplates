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
      /** Row position of the stimulus (0-indexed) */
      stimulus_row: {
        type: ParameterType.INT,
        default: 0,
      },
      /** Column position of the stimulus (0-indexed) */
      stimulus_col: {
        type: ParameterType.INT,
        default: 0,
      },
      /** Whether this trial is a target trial */
      is_target: {
        type: ParameterType.BOOL,
        default: false,
      },
      /** Duration the stimulus is displayed (ms) */
      stimulus_duration: {
        type: ParameterType.INT,
        default: 500,
      },
      /** Inter-stimulus interval (ms) */
      // I recommend using feedback_duration as ISI if you have any type of feedback showing
      isi_duration: {
        type: ParameterType.INT,
        default: 1000,
      },
      /** Whether to show feedback after response */
      show_feedback: {
        type: ParameterType.BOOL,
        default: true,
      },
      /** Whether to show feedback when there is no response */
      showFeedbackNoResponse: {
        type: ParameterType.BOOL,
        default: true,
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
      /** Whether to wait for feedback duration before ending trial when no response */
      /** if using feedback_duration as interstimulus response, keep this true */
      feedbackWaitNoResponse: {
        type: ParameterType.BOOL,
        default: true,
      },
      /** Text for the response button */
      button_text: {
        type: ParameterType.STRING,
        default: "",
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
        default: "Click MATCH when this is a target trial.",
      },
    },
    data: {
      /** Row position of the stimulus */
      stimulus_row: {
        type: ParameterType.INT,
      },
      /** Column position of the stimulus */
      stimulus_col: {
        type: ParameterType.INT,
      },
      /** Whether this trial was a target */
      is_target: {
        type: ParameterType.BOOL,
      },
      /** Whether participant responded */
      response: {
        type: ParameterType.BOOL,
      },
      /** Response time in milliseconds */
      response_time: {
        type: ParameterType.INT,
      },
      /** Whether the response was correct */
      correct: {
        type: ParameterType.BOOL,
      },
    },
  citations: '__CITATIONS__',
};

type Info = typeof info;

/**
 * **plugin-spatial-nback-ts**
 *
 * Single trial spatial grid stimulus with response collection
 *
 * @author A. Hunter Farhat
 */
class SpatialNbackTsPlugin implements JsPsychPlugin<Info> {
  static info = info;

  constructor(private jsPsych: JsPsych) {}

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    let trial_start_time: number;
    let response_allowed = false;
    let response_given = false;
    let stimulus_timeout: number;
    let isi_timeout: number;

    // Generate random position if not specified
    const stimulus_row = trial.stimulus_row ?? Math.floor(Math.random() * trial.rows);
    const stimulus_col = trial.stimulus_col ?? Math.floor(Math.random() * trial.cols);

    const createDisplay = (): void => {
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
      
      // Instructions
      html += `<div id="nback-instructions" style="
        position: absolute;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 520px;
        text-align: center;
        font-size: clamp(14px, 2vmin, 18px);
        z-index: 10;
      ">${trial.instructions}</div>`;

      // Calculate grid size to fit screen
      const grid_size = Math.min(50, 80 / Math.max(trial.rows, trial.cols));
      const cell_size = `${grid_size / Math.max(trial.rows, trial.cols)}vmin`;

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
      
      for (let row = 0; row < trial.rows; row++) {
        html += '<div style="display: flex;">';
        for (let col = 0; col < trial.cols; col++) {
          html += `<div id="cell-${row}-${col}" style="
            width: ${cell_size};
            height: ${cell_size};
            border: 1px solid #ccc;
            background-color: white;
            box-sizing: border-box;
            min-width: ${Math.max(40, trial.cell_size * 0.5)}px;
            min-height: ${Math.max(40, trial.cell_size * 0.5)}px;
          "></div>`;
        }
        html += '</div>';
      }
      html += '</div>';

      // Response button
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
      " disabled>${trial.button_text}</button>`;
      html += '</div>';
      
      // Feedback area
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

      // Add button hover effects and event listener
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
      button.addEventListener('click', handleResponse);
    };

    const startTrial = (): void => {
      // Show stimulus
      const cell = document.getElementById(`cell-${stimulus_row}-${stimulus_col}`) as HTMLElement;
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
          if (response_allowed && !response_given) {
            handleNoResponse();
          }
        }, trial.isi_duration);
      }, trial.stimulus_duration);
    };

    const handleResponse = (): void => {
      if (!response_allowed || response_given) return;

      response_allowed = false;
      response_given = true;
      const response_time = performance.now() - trial_start_time;
      const is_correct = trial.is_target;

      // Clear timeouts
      clearTimeout(stimulus_timeout);
      clearTimeout(isi_timeout);
      

      // Show feedback
      showFeedback(is_correct, response_time, true);
    };

    const handleNoResponse = (): void => {
      if (!response_allowed || response_given) return;

      response_allowed = false;
      response_given = true;
      const is_correct = !trial.is_target;

      showFeedback(is_correct, null, false);
    };

    const showFeedback = (is_correct: boolean, response_time: number | null, made_response: boolean): void => {
      // If no feedback is shown, just end trial
      if (!trial.show_feedback && !trial.show_feedback_border) {
        return endTrial(is_correct, response_time, made_response);
      }

      // Disable the button during feedback
      const button = document.getElementById('nback-response-btn') as HTMLButtonElement;
      button.disabled = true;
      button.style.opacity = '0.6';

      // If there is no response and feedback must not be shown for no response,
      // match feedback speed and then end trial
      if (response_time === null && !trial.showFeedbackNoResponse && trial.feedbackWaitNoResponse) {
        setTimeout(() => {
          endTrial(is_correct, response_time, made_response);
        }, trial.feedback_duration);
        return;
      }
      
      // Initialize feedback elements
      const grid = document.getElementById('nback-grid') as HTMLElement;
      const feedback_div = document.getElementById('nback-feedback') as HTMLElement;

      // Show border feedback
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

      // Wait for feedback duration before ending trial
      setTimeout(() => {
        endTrial(is_correct, response_time, made_response);
      }, trial.feedback_duration);
    };

    const endTrial = (is_correct: boolean, response_time: number | null, made_response: boolean): void => {
      // Prepare trial data
      const trial_data = {
        stimulus_row: stimulus_row,
        stimulus_col: stimulus_col,
        is_target: trial.is_target,
        response: made_response,
        response_time: response_time,
        correct: is_correct
      };

      // Clear display
      display_element.innerHTML = '';

      // End trial
      this.jsPsych.finishTrial(trial_data);
    };

    // Initialize the trial
    createDisplay();
    startTrial();
  }
}

export default SpatialNbackTsPlugin;