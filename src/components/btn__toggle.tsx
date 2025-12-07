import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

interface ToggleButtonWithIconProps {
    isOn: boolean;
    onToggle: () => void;
}

function ToggleButtonWithIcon({ isOn, onToggle }: ToggleButtonWithIconProps) {
    return (
        <button 
            onClick={onToggle} 
            style={{ 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                padding: '5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {isOn ? <FaToggleOn size={30} color="#54d4ffea" /> : <FaToggleOff size={30} color="#54d4ffea" />}
        </button>
    );
}

export default ToggleButtonWithIcon;