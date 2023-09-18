document.addEventListener("DOMContentLoaded", function () {
   const addQuestionBtn = document.getElementById("addQuestionBtn");
   const testForm = document.getElementById("testForm");
   const questionsContainer = document.getElementById("questionsContainer");

   let questionCount = 0;

   addQuestionBtn.addEventListener("click", function (event) {
      event.preventDefault();
      questionCount++;
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionLabel = document.createElement("label");
      questionLabel.textContent = `Вопрос ${questionCount}:`;
      questionDiv.appendChild(questionLabel);

      const questionInput = document.createElement("input");
      questionInput.type = "text";
      questionInput.name = `question${questionCount}`;
      questionInput.required = true;
      questionDiv.appendChild(questionInput);

      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");

      for (let i = 1; i <= 2; i++) {
         const optionLabel = document.createElement("label");
         optionLabel.textContent = `Вариант ответа ${i}:`;
         const optionInput = document.createElement("input");
         optionInput.type = "text";
         optionInput.name = `option${i}_q${questionCount}`;
         optionInput.required = true;
         const optionCheckbox = document.createElement("input");
         optionCheckbox.type = "checkbox";
         optionCheckbox.name = `correct_q${questionCount}`;
         optionCheckbox.value = `option${i}_q${questionCount}`;
         optionLabel.appendChild(optionInput);
         optionLabel.appendChild(optionCheckbox);
         optionsDiv.appendChild(optionLabel);
      }

      questionDiv.appendChild(optionsDiv);
      questionsContainer.appendChild(questionDiv);
   });

   testForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(testForm);
      const data = {};
      for (const [key, value] of formData) {
         if (data[key]) {
            if (!Array.isArray(data[key])) {
               data[key] = [data[key]];
            }
            data[key].push(value);
         } else {
            data[key] = value;
         }
      }

      console.log("Отправка данных на сервер:", data);

   });
});
