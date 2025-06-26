import React from 'react';
import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
  const { t } = useTranslation();

  const settings = [
    {
      id: 'notifications',
      title: t('settings.notifications.title'),
      options: [
        { id: 'daily', label: t('settings.notifications.daily') },
        { id: 'weekly', label: t('settings.notifications.weekly') },
        { id: 'none', label: t('settings.notifications.none') }
      ]
    },
    {
      id: 'sound',
      title: t('settings.sound.title'),
      options: [
        { id: 'on', label: t('settings.sound.on') },
        { id: 'off', label: t('settings.sound.off') }
      ]
    },
    {
      id: 'language',
      title: t('settings.language.title'),
      options: [
        { id: 'en', label: t('settings.language.english') },
        { id: 'es', label: t('settings.language.spanish') },
        { id: 'fr', label: t('settings.language.french') }
      ]
    }
  ];

  return (
    <div>
      <h1>{t('settings.title')}</h1>
      
      {settings.map(setting => (
        <section key={setting.id}>
          <h2>{setting.title}</h2>
          <div>
            {setting.options.map(option => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={`${setting.id}-${option.id}`}
                  name={setting.id}
                  value={option.id}
                />
                <label htmlFor={`${setting.id}-${option.id}`}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2>{t('settings.account.title')}</h2>
        <div>
          <button>{t('settings.account.changePassword')}</button>
          <button>{t('settings.account.deleteAccount')}</button>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage; 