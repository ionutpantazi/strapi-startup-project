module.exports = () => {
    return {
      navigation: {
        enabled: true,
        config: {
          additionalFields: ['audience'],
          allowedLevels: 2
        },
        i18nEnabled: true
      },
      gql: {
        navigationItemRelated: ['Page']
      }
    }
  }
  