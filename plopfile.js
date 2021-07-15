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
        // Actions for dynamic index.js at /component level
        actions.push({
          type: 'add',
          path: 'src/components/index.js',
          templateFile: 'scaffold-templates/injectable-index.js.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import { {{pascalCase componentName}} } from './{{path}}/{{pascalCase componentName}}';`,
        });
        actions.push({
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase componentName}},`,
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
        // Actions for dynamic index.js at /component level
        actions.push({
          type: 'add',
          path: 'src/components/index.js',
          templateFile: 'scaffold-templates/injectable-index.js.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import { {{pascalCase componentName}} } from './{{kebabCase componentName}}/{{pascalCase componentName}}';`,
        });
        actions.push({
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase componentName}},`,
        });
      }
      return actions;
    },
  });
  plop.setGenerator('page', {
    description: 'Creates new page',
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'Page Name?* [*PascalCase Required]',
      },
    ],
    actions: function () {
      return [
        {
          type: 'add',
          path: 'src/pages/{{kebabCase pageName}}/{{pascalCase pageName}}.tsx',
          templateFile: 'scaffold-templates/Page.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{kebabCase pageName}}/test/{{pascalCase pageName}}.test.tsx',
          templateFile: 'scaffold-templates/Page.test.js.hbs',
        },
        // Actions for dynamic index.js at /component level
        {
          type: 'add',
          path: 'src/pages/index.js',
          templateFile: 'scaffold-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/pages/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import { {{pascalCase pageName}} } from './{{kebabCase pageName}}/{{pascalCase pageName}}';`,
        },
        {
          type: 'append',
          path: 'src/pages/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase pageName}},`,
        },
      ];
    },
  });
};
