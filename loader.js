define(['ojs/ojcore', 'text!./address-form.html', './address-form', 'text!./address-form.json', 'css!./address-form', 'ojs/ojcomposite'],
  function(oj, view, viewModel, metadata) {
    oj.Composite.register('address-form', {
      view: { inline: view },
      viewModel: { inline: viewModel },
      metadata: { inline: JSON.parse(metadata) }
    });
  }
);
