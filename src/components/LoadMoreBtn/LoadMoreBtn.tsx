import React,{FC} from "react";

interface ErrorMessageProps {
  onClick: () => void; // Указываем тип для обработчика события
}


const ErrorMessage: FC<ErrorMessageProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Load more</button>
  );
}

export default ErrorMessage;