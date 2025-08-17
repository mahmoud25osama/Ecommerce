export const Badge = ({ children, variant = 'default' }) => {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        danger: 'bg-red-100 text-red-800',
        sale: 'bg-red-500 text-white'
    };
    return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
        {children}    
    </span>
    );
};
export default Badge;

