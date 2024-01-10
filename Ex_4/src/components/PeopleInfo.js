import React from "react";

const people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

const isTeenager = (person) => person.age >= 10 && person.age <= 20;

const PeopleInfo = () => {
  // Find the first teenager
  // --> Find => the first element pass the condition(test) <--
  const firstTeenager = people.find(isTeenager);

  // Find all teenagers
  // --> Filter => pass the condition(test) implement by the function <--
  // --> this method create a new array
  const allTeenagers = people.filter(isTeenager);

  // Check if every person is a teenager
  // --> Return TRUE if all element in array pass the condition(test) <--
  const isEveryoneTeenager = people.every(isTeenager);

  // Check if any person is a teenager
  // --> Return TRUE if at least one element in array pass the condition(test) <--
  const isAnyoneTeenager = people.some(isTeenager);

  return (
    <div>
      <h2>People Information</h2>
      <p>First Teenager: {firstTeenager ? firstTeenager.name : "None"}</p>
      <p>All Teenagers: {allTeenagers.map((teen) => teen.name).join(", ")}</p>
      <p>Is everyone a teenager? {isEveryoneTeenager ? "Yes" : "No"}</p>
      <p>Is anyone a teenager? {isAnyoneTeenager ? "Yes" : "No"}</p>
    </div>
  );
};

export default PeopleInfo;
