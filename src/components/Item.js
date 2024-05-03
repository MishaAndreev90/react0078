import React from 'react';

const Item = () => {
  // Массив объектов с загадками
  const riddles = [
    {
      id: 1,
      description: 'Сколько букв в слове "пицца"?: ...',
      option1: '4',
      option2: '3',
      option3: '5',
      option4: '6',
      correct: 3 // Номер правильного ответа
    },
    {
      id: 2,
      description: 'Чем является арбуз"?',
      option1: 'а)фруктом',
      option2: 'б)овощем',
      option3: 'в)ягодой',
      correct: 3
    },
    
  ];

  // Формирование шаблона компонента для каждой загадки
  const riddleItems = riddles.map(riddle => (
    <div key={riddle.id}>
      <h3>{riddle.description}</h3>
      <ul>
        <li>{riddle.option1}</li>
        <li>{riddle.option2}</li>
        <li>{riddle.option3}</li>
        <li>{riddle.option4}</li>
      </ul>
    </div>
  ));

  return (
    <div>
      {riddleItems}
    </div>
  );
};

export default Item;