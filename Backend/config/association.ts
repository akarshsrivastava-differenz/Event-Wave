import User from "../models/user/user";
import Event from "../models/event/event";

User.hasMany(Event , {foreignKey:"user_id" , as:"event_organised"});
Event.belongsTo(User , {foreignKey:"user_id",as:"organiser"});