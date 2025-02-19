type Props = {
  errorMessage: string;
  setErrorMessage: (errorText: string) => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  setErrorMessage,
}) => {
  const handleCloseBtn = () => {
    setErrorMessage('');
  };

  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${errorMessage ? '' : 'hidden'}`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={handleCloseBtn}
      />
      {errorMessage}
    </div>
  );
};
