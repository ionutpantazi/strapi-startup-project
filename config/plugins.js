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
      },
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            s3Options: {
              credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_ACCESS_SECRET,
              },
              region: process.env.AWS_REGION,
              params: {
                ACL: 'public-read',
                signedUrlExpires: 15 * 60,
                Bucket: process.env.AWS_BUCKET,
              },
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      }
    }
  }
  