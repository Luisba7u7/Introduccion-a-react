function InputNumber({ value, onChange, onGuess, disabled}) {
    return(
        <div>
            <input
            type="number"
            min="1"
            max="100"
            placeholder="Escribe un numero"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            />

            <button onClick={onGuess} disabled={disabled}>
                Adivinar
            </button>
        </div>

    )
}

export default InputNumber;