
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
  // columns
  {
    username: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  },
  {
    // options
    sequelize,
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: false,
    underscore: true,
  });
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Role, {
      foreignKey: 'role_id',
      as: 'role',
      onDelete: 'CASCADE',
    });
    
    User.hasMany(models.UserOutlet, {
      foreignKey: 'user_id',
      as: 'outlets',
      onDelete: 'CASCADE',
    });
  };

  return User;
};