ServerDash.ProfileSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        profileWidgets: { embedded: 'always' }
    }
});
