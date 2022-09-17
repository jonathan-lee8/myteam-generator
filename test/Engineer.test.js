const Engineer = require("../lib/Engineer");
// jest.mock("../lib/Engineer.js");

test("creates an engineer object", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
})

test("gets engineer name", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.getName()).toBe("Jonathan");
});

test("gets engineer id", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.getId()).toBe(69);
});

test("gets engineer email", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.getEmail()).toBe("Jonathan@gmail.com");
});

test("gets engineer role", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.getRole()).toBe("Engineer");
    console.log(engineer);
});

test("gets engineer github", () => {
    const engineer = new Engineer("Jonathan", 69, "Jonathan@gmail.com", "JonathanHub");

    expect(engineer.getGithub()).toBe("JonathanHub");
})