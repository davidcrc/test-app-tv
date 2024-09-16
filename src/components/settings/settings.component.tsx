import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import * as S from './settings.style'
import { SettingOption } from './components/setting-option';

export const Settings = () => {
  const { ref } = useFocusable();

  const opptions = [
    "Account",
    "Help",
    "App details",
    "Terms of Use",
    "Privacy Notice",
  ];

  return (
    <S.Settings>
      <h1>Settings</h1>
      <div ref={ref}>
        {opptions.map((option) => (
          <SettingOption key={option} label={option} />
        ))}
      </div>
    </S.Settings>
  );
};
