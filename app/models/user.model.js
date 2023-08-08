module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter First_Name'
            }
          },
      },
      SecondName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter Second_Name'
            }
          },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
              msg: 'Please enter username'
            }
          },
      },
      password: {
        type: Sequelize.INTEGER,
        notNull: true,
        isInt: true,
        validate: {
            notNull: {
              msg: 'Please enter Password'
            },
            isInt: {
                msg: 'Please enter Valid INT Password'
            },
          },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
              msg: 'Please enter Email'
            }
          },
      },
    //   description: {
    //     type: Sequelize.STRING
    //   },
      id: {
        type: Sequelize.INTEGER,
        notNull: true,
        unique: true
        //AutoIncrement
      },
      Rank: {
        type: Sequelize.INTEGER,
        notNull: true,
        unique: true,
        //Range(1, 4);
      },
    });
    return User;
  };
  