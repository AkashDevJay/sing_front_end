export function findClosestJob (jobs, deletedJobId) {
    let closestjob = jobs.reduce(function (prev, curr) {
        return (curr.id - deletedJobId < prev.id - deletedJobId ? curr : prev)
    })
    return closestjob.id;
}