ServerDash.ProfileWidgetSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        widget: { embedded: 'always' }
    }
});
