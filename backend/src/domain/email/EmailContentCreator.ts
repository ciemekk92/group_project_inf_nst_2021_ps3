export const getUserRegistrationContent = (webAppPath: string, activationToken: string) => {
  return `
<body>
    <h1>Kliknij w poniższy link i dokończ rejestrację</h1>
    <p>${webAppPath}/user-activation/${activationToken}</p>
</body>
`;
};

export const getResetPasswordContent = (webAppPath: string, resetToken: string) => {
  return `
<body>
    <h1>Kliknij w poniższy link i dokończ rejestrację</h1>
    <p>${webAppPath}/reset-password/${resetToken}</p>
</body>
`;
};
