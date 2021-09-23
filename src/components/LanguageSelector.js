import React from 'react'
function LanguageSelector({ language, onChangeLanguage }) {
  function handleChange(event) {
    event.preventDefault()
    onChangeLanguage(event.target.value)
  }
  return (
    <div className="select">
      <select onChange={handleChange} value={language}>
        <option value="">Change Language</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  )
}
export default LanguageSelector
