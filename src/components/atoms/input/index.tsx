import React from "react";
import "./style.css";

export function InputDisabled() {
	return (
		<div>
			<input
				placeholder="Disabled"
				className="input_disabled"
			/>
		</div>
	);
}

export function InputWithIcon() {
	return (
		<div>
			<input
				placeholder="With Icon"
				className="input_with_icon"
			/>
		</div>
	);
}

export function InputFocusLight() {
	return (
		<div>
			<input
				placeholder="Focus Light"
				className="input_focus_light"
			/>
		</div>
	);
}

export function InputErrorLight() {
	return (
		<div>
			<input
				placeholder="Error Light"
				className="input_error_light"
			/>
		</div>
	);
}

export function InputNoFocusLight() {
	return (
		<div>
			<input
				placeholder="No Focus Light"
				className="input_no_focus_light"
			/>
		</div>
	);
}
