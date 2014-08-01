var appendAttributeSet = function appendAttributeSet( attributeSet, element ){
	/*:
		@meta-configuration:
			{
				"attributeSet:required": "object",
				"element:required": "Element|Node"
			}
		@end-meta-configuration
	*/

	for( var attributeName in attributeSet ){
		element.setAttributeNode( attributeSet[ attributeName ] );
	}
};