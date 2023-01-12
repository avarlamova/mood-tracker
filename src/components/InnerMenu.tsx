import { FC } from "react";
import "./InnerMenu.scss";

const InnerMenu: FC = () => {
  const moods = [
    { value: "Happy", emoji: "😊", id: "Happy" },
    { value: "Sad", emoji: "😔", id: "Sad" },
    { value: "Anxious", emoji: "😰", id: "Anxious" },
    { value: "Disappointed", emoji: "😞", id: "Disappointed" },
  ];

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id } = el;
    return (
      <div key={id} className="emoji-list">
        <div className="list-item">
          {emoji}
          {value}
        </div>
      </div>
    );
  });
  return <div>{renderedMoods}</div>;
};

export default InnerMenu;
