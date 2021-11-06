export const getUserRegistrationContent = (webAppPath: string, activationToken: string) => {
  return `
<body>
    <h1>Kliknij w poniższy link i dokończ rejestrację</h1>
    <p>${webAppPath}/user_activation/${activationToken}</p>
</body>
`;
};
