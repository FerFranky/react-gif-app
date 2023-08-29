import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newValue = inputValue.trim()
        if (newValue <= 1) return
        onAddCategory(newValue)
        setInputValue('')
    }
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}