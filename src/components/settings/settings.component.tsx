import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import * as S from "./settings.style";
import { SettingOption } from "./components/setting-option";
import { useState } from "react";
import { AccountSection } from "./components/account-section";
import { AppDetailSection } from "./components/app-detail-section";
import { HelpSection } from "./components/help-section";
import { PrivacySection } from "./components/privacy-section";
import { TermOfUseSection } from "./components/term-of-use-section";

export const Settings = () => {
  enum SettingOptionsEnum {
    ACCOUNT = "Account",
    HELP = "Help",
    APP_DETAILS = "App details",
    TERMS_OF_USE = "Terms of Use",
    PRIVACY_NOTICE = "Privacy Notice",
  }

  const { ref, focusKey } = useFocusable();
  const [optionSelected, setOptionSelected] = useState(
    SettingOptionsEnum.ACCOUNT
  );

  const opptions = [
    SettingOptionsEnum.ACCOUNT,
    SettingOptionsEnum.HELP,
    SettingOptionsEnum.APP_DETAILS,
    SettingOptionsEnum.TERMS_OF_USE,
    SettingOptionsEnum.PRIVACY_NOTICE,
  ];

  const handleSelectedOption = ()=>{
    
  }

  return (
    <FocusContext.Provider value={focusKey} key="SETTINGS">
      <S.SettingsContainer>
        <S.Settings>
          <h1>Settings</h1>
          <div ref={ref}>
            {opptions.map((option) => (
              <SettingOption
                isSelected={option === optionSelected}
                onEnterPress={() => {
                  setOptionSelected(option);
                }}
                onClick={() => {
                  setOptionSelected(option);
                }}
                key={option}
                label={option}
              />
            ))}
          </div>
        </S.Settings>
        <S.SettingSection>
          {optionSelected === SettingOptionsEnum.ACCOUNT && <AccountSection />}
          {optionSelected === SettingOptionsEnum.APP_DETAILS && (
            <AppDetailSection />
          )}
          {optionSelected === SettingOptionsEnum.HELP && <HelpSection />}
          {optionSelected === SettingOptionsEnum.PRIVACY_NOTICE && (
            <PrivacySection />
          )}
          {optionSelected === SettingOptionsEnum.TERMS_OF_USE && (
            <TermOfUseSection />
          )}
        </S.SettingSection>
      </S.SettingsContainer>
    </FocusContext.Provider>
  );
};
