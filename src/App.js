import Select from "react-select";

export default function App(){
    const options = [
        {value: "Purple", label: "Purple", color: "#800080", bgColor : "rgba(118, 0, 205, 0.1)"},
        {value: "Red", label: "Red", color: "#FF0000", bgColor : "rgba(255, 0, 0, 0.1)"},
        {value: "Orange", label: "Orange", color: "#F39C12", bgColor : "rgba(255, 145, 26, 0.1)"},
        {value: "Yellow", label: "Yellow", color: "#F7DC6F", bgColor : "rgba(255, 243, 24, 0.1)"},
        {value: "Green", label: "Green", color: "#009F1C", bgColor : "rgba(0, 203, 23, 0.1)"},
        {value: "Slate", label: "Slate", color: "#515A5A", bgColor : "rgba(0, 8, 18, 0.1)"},
        {value: "silver", label: "silver", color: "#D0D3D4", bgColor : "rgba(234, 255, 255, 0.54)"},
        {value: "Ocean", label: "Ocean", color: "#89E9EB", bgColor : "rgba(59, 252, 255, 0.1)"},
        {value: "Forest", label: "Forest", color: "#1E8449", bgColor : "rgba(0, 73, 24, 0.1)"},
    ];

    const colorStyles = {
        control : (styles) => ({...styles}),
        option : (styles, {data, isFocused, isSelected}) =>{
            return {
                ...styles,
                 color: data.color, 
                 backgroundColor: isFocused ? data.bgColor : "white",
            }
        
        },
        multiValue: (styles, {data}) => {
            return {
              ...styles,
              backgroundColor: data.bgColor,
              color: data.color,
              borderRadius: '4px',
            };
        },
        multiValueLabel: (styles, {data}) => {
            return{
                ...styles,
                color: data.color,
            }
        }
    }

    return(
        <Select options={options} isMulti className="select" styles={colorStyles}/>
    )
}