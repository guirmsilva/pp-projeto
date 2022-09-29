const settings = {
    requirements: [
        {
            type: 'name',
            minLength: 2,
            maxLength: 300,
            required: true
        },
    
        {
            type: 'email',
            minLength: 2,
            maxLength: 300,
            required: true,
        },
    
        {
            type: 'password',
            minLength: 6,
            maxLength: 300,
            required: true
        },
    
        {
            type: 'passwordConfirm',
            minLength: 6,
            maxLength: 300,
            required: true
        }
    ]
};

module.exports = settings;