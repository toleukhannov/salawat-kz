const InputController = () => {
  return (
    <label htmlFor="inp" className="inp">
      <textarea id="inp" className="" placeholder="&nbsp;" />
      <span className="label">Комментарий к заказу</span>
    </label>
  );
};

export default InputController;
