module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Creates new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name?* [*PascalCase Required]',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Component Location?* [*Root location: src/components/]',
      },
    ],
    actions: function (data) {
      var actions = [];
      if (data.path !== '') {
        actions.push({
          type: 'add',
          path: 'src/components/{{path}}/{{pascalCase componentName}}.tsx',
          templateFile: 'scaffold-templates/Component.js.hbs',
        });
        actions.push({
          type: 'add',
          path: 'src/components/{{path}}/test/{{pascalCase componentName}}.test.tsx',
          templateFile: 'scaffold-templates/Component.test.js.hbs',
        });
      } else {
        actions.push({
          type: 'add',
          path: 'src/components/{{kebabCase componentName}}/{{pascalCase componentName}}.tsx',
          templateFile: 'scaffold-templates/Component.js.hbs',
        });
        actions.push({
          type: 'add',
          path: 'src/components/{{kebabCase componentName}}/test/{{pascalCase componentName}}.test.tsx',
          templateFile: 'scaffold-templates/Component.test.js.hbs',
        });
      }
      return actions;
    },
  });
};
