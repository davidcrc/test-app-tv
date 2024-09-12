import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";
import styled from "styled-components";

const SettingsPage = () => {
  const { ref } = useFocusable();

  const opptions = [
    "Account",
    "Help",
    "App details",
    "Terms of Use",
    "Privacy Notice",
  ];

  return (
    <Settings>
      <h1>Settings</h1>
      <div ref={ref}>
        {opptions.map((option) => (
          <SettingOption key={option} label={option} />
        ))}
      </div>
    </Settings>
  );
};

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: white;
  padding: 24px;
`;

const Options = styled.div<{ focused: boolean }>`
  padding: 8px;
  font-size: 24px;
  border: 2px solid ${({ focused }) => (focused ? "#01B6D1" : "transparent")};
  outline: none;
  width: fit-content;
  &:focus {
    border-color: #01b6d1;
  }
`;

const SettingOption = ({ label }: { label: string }) => {
  const { ref, focused } = useFocusable();

  return (
    <Options ref={ref} focused={focused}>
      {label}
    </Options>
  );
};

export default SettingsPage;
