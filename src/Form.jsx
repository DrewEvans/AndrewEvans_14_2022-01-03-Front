import React from "react";
import InputField from "./InputField";

function Form({ children, title }) {

	const style = {
		display: "flex",
		flexDirection: "column",
	  };

	return (
		<form style={style}>		
			<h1>{title}</h1>
			{children.map((child) => {
				const {controlType, labelHeader, idNameHtml, options, onChange, onClick, type, minLength, value, placeholder, buttonText} = child.props
			
				if(controlType === "select"){
				return (
				<InputField 
					controlType={controlType} 
					labelHeader={labelHeader} 
					idNameHtml={idNameHtml} 
					onChange={onChange} 
					options={options}
					value={value}/>
				)
			}
			if(controlType === "input"){
				return (
				<InputField 
				controlType={controlType}
				labelHeader={labelHeader}
				idNameHtml = {idNameHtml} 
                type={type}
                minLength={minLength}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
				/>
				)
			}
			if(controlType === "submit"){
				return (
				<InputField 
				controlType={controlType}
				onClick={onClick}
				buttonText={buttonText}
				/>
				)
			}
			})}
		</form>
	);
}

export default Form;
