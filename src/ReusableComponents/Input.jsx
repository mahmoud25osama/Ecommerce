
export const Input = ({ name, required, onBlur, id, type = 'text', placeholder, value, onChange, className = '' }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            id={id}
            required={required}
            onBlur={onBlur}
            onChange={onChange}
            className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
        />
    );
}
export default Input;