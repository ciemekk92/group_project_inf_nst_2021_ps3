import React from 'react';
import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { TilesContainer, TilesRow } from './HomePage.styled';
import { Tile } from './components';

export const HomePage = (): JSX.Element => {
  return (
    <VerticalPageWrapper>
      <TilesContainer>
        <TilesRow>
          <Tile iconKey="notifications" label="Powiadomienia" routePath="#" />
          <Tile iconKey="dashboard" label="Dashboard" routePath="/dashboard" />
          <Tile iconKey="alarm_on" label="Sprinty" routePath="#" />
          <Tile iconKey="event_note" label="Kalendarz" routePath="#" />
        </TilesRow>
        <TilesRow>
          <Tile iconKey="layers" label="Projekty" routePath="/projects" />
          <Tile iconKey="task" label="Zadania" routePath="#" />
          <Tile iconKey="account_circle" label="Profil" routePath="#" />
          <Tile iconKey="question_answer" label="Wiadomości" routePath="#" />
        </TilesRow>
      </TilesContainer>
    </VerticalPageWrapper>
  );
};
