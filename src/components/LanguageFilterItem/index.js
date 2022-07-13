import './index.css'

const LanguageFilterItem = props => {
  const {languageData, isActive, setActiveLanguageFilterId} = props
  const {id, language} = languageData

  const btnClassName = isActive ? 'language-btn active-btn' : 'language-btn'

  const onClickLanguage = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="repos-list">
      <button className={btnClassName} type="button" onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
