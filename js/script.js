/* start sign up page logic*/
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-bar .step');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentStep = 0;

function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle('active', index === step);
  });

  progressSteps.forEach((progressStep, index) => {
    if (index < step) {
      progressStep.classList.add('completed');
    } else {
      progressStep.classList.remove('completed');
    }
  });

  if (step === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (step === formSteps.length - 1) {
    nextBtn.innerHTML = 'Submit';
  } else {
    nextBtn.innerHTML = 'Next';
  }
}

function navigateStep(direction) {
  currentStep = currentStep + direction;
  showStep(currentStep);
}

prevBtn.addEventListener('click', () => {
  navigateStep(-1);
});

nextBtn.addEventListener('click', () => {
  if (currentStep === formSteps.length - 1) {
    // Submit form
    console.log('Form submitted!');
  } else {
    navigateStep(1);
  }
});

showStep(currentStep);

function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle('active', index === step);
  });

  progressSteps.forEach((progressStep, index) => {
    if (index < step) {
      progressStep.classList.add('completed');
      progressStep.innerHTML = '&#10003;'; // Checkmark symbol
    } else if (index === step) {
      progressStep.classList.add('active');
      progressStep.innerHTML = `${index + 1}`; // Step number
    } else {
      progressStep.classList.remove('completed', 'active');
      progressStep.innerHTML = `${index + 1}`; // Step number
    }
  });
}

const radioInputs = document.querySelectorAll('.radio-input');

radioInputs.forEach(radioInput => {
  radioInput.addEventListener('click', () => {
    const selectedValue = document.querySelector('.radio-input:checked').value;
    console.log(`Selected value: ${selectedValue}`);
  });
});
/* end Sign up page logic*/