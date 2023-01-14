import { FC, useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./InnerMenu.scss";

const InnerMenu: FC = () => {
  // const [selectedMood, setSelectedMood] = useState("");

  const { chooseMood } = useContext(DaysContext);

  const moods = [
    { value: "Happy", emoji: "😊", id: "Happy" },
    { value: "Sad", emoji: "😔", id: "Sad" },
    { value: "Anxious", emoji: "😰", id: "Anxious" },
    { value: "Disappointed", emoji: "😞", id: "Disappointed" },
  ];

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id } = el;
    return (
      <div key={id} className="emoji-list" onClick={() => chooseMood(value)}>
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
