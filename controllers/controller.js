// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goals'
      })
}
// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'Set goals'
      })
}
// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({
        message: 'Update goals'
      })
}
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({
        message: 'Delete goals'
      })
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}