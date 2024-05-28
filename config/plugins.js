module.exports = () => {
    return {
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
  