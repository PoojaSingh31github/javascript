// question 1 Fetch and Display User Data
const fetchUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    console.log(data)
    return assignRoles(data)

};

// question 2 Create a frequency map of roles
// Function to assign roles dynamically

const assignRoles = (users) => {
    const roles = ["Admin", "Viewer", "Editor"];
    return users.map((user, index) => ({
        ...user,
        role: roles[index % roles.length]
    }));
};

const calculateRoleFrequency = (users) => {
    return users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {});
};

// question 3 Filter users based on search term
const filterUsers = (users, searchTerm) => {
    return users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// question 4: Sort filtered users by age or name
const sortUsers = (users, sortBy) => {
    return [...users].sort((a, b) => {
        if (sortBy === "age") return a.age - b.age;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
    });
};

// Method chaining for combined operations
const methodChaining = (users, role) => {
    const result = users
        .filter((user) => user.role === role)
        .map((user) => user.name)
        .sort()
        .reduce((acc, name) => {
            acc[name] = (acc[name] || 0) + 1;
            return acc;
        }, {});

    return result;
};

// question 6: Implement Context-Specific Functions Using this
const UserManager = {
    users: [],
    setUsers(data) {
        this.users = data;
    },
    getAverageAge() {
        return this.users.reduce((sum, user) => sum + user.age, 0) / this.users.length;
    }
};

// Final Output
fetchUserData().then((data) => {
    console.log("Raw Data:", data);

    const frequencyMap = calculateRoleFrequency(data);
    console.log("Frequency Map:", frequencyMap);

    const filteredUsers = filterUsers(data, "Admin");
    console.log("Filtered Users:", filteredUsers);

    const sortedUsers = sortUsers(filteredUsers, "age");
    console.log("Sorted Users:", sortedUsers);

    const methodChainingResult = methodChaining(data, "Editor");
    console.log("Method Chaining Result:", methodChainingResult);

    UserManager.setUsers(data);
    console.log("Average Age:", UserManager.getAverageAge());
});
