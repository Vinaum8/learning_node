'use-strict';

exports.create = async(data) => {
    var peoples = new peoples(data);
    await peoples.save();
}