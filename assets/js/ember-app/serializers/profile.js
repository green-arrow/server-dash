ServerDash.ProfileSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        widgets: { embedded: 'always' }
    }
});
