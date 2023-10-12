"use strict";

module.exports = [
	{
		lang: "Python",
		code: 'print("Hello, World!")',
	},
	{
		lang: "Python",
		code: "def add(a, b):\n\treturn a + b",
	},
	{
		lang: "Python",
		code: "class Circle:\n\tdef __init__(self, radius):\n\t\tself.radius = radius\n\n\tdef area(self):\n\t\treturn 3.14 * self.radius ** 2",
	},
	{
		lang: "JavaScript",
		code: 'console.log("Hello, World!");',
	},
	{
		lang: "JavaScript",
		code: "function multiply(a, b) {\n\treturn a * b;\n}",
	},
	{
		lang: "JavaScript",
		code: "const square = num => num * num;",
	},
	{
		lang: "Java",
		code: 'public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}',
	},
	{
		lang: "Java",
		code: "public class Rectangle {\n\tprivate int width;\n\tprivate int height;\n\n\tpublic Rectangle(int width, int height) {\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t}\n\n\tpublic int getArea() {\n\t\treturn width * height;\n\t}\n}",
	},
];
