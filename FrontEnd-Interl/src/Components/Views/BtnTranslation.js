import i18n from '../i18/i18';

export default function BtnTranslation() {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className='btn-translation'>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('vi')}>VI</button>
            </div>
        </>
    );
}
