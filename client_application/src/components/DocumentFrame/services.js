const document = {
    BU: "123",
    CIF: "12345",
    id: "123",
    type: "HTML",
    content: "PCFET0NUWVBFIGh0bWw+DQo8aHRtbD4NCjxoZWFkPg0KPHRpdGxlPlBhZ2UgVGl0bGU8L3RpdGxlPg0KPC9oZWFkPg0KPGJvZHk+DQoNCjxoMT5UaGlzIGlzIGEgSGVhZGluZzwvaDE+DQo8cD5UaGlzIGlzIGEgcGFyYWdyYXBoLjwvcD4NCg0KPC9ib2R5Pg0KPC9odG1sPg0K"
};


export const base64ToString = () => {
    const res = atob(document.content);
    console.log(res);
    return res;
};