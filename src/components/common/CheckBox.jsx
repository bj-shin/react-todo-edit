export default function CheckBox({
  lable,
  checked,
  onChange,
  className,
  children,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children ? (
        children
      ) : (
        <span className="whitespace-pre-wrap">{lable}</span>
      )}
    </label>
  );
}
