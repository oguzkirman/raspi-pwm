"use strict";
Object.defineProperties(exports, {
  PWM: {get: function() {
      return PWM;
    }},
  __esModule: {value: true}
});
var $__raspi_45_peripheral__,
    $___46__46__47_lib_47_addon__;
var Peripheral = ($__raspi_45_peripheral__ = require("raspi-peripheral"), $__raspi_45_peripheral__ && $__raspi_45_peripheral__.__esModule && $__raspi_45_peripheral__ || {default: $__raspi_45_peripheral__}).Peripheral;
var addon = ($___46__46__47_lib_47_addon__ = require("../lib/addon"), $___46__46__47_lib_47_addon__ && $___46__46__47_lib_47_addon__.__esModule && $___46__46__47_lib_47_addon__ || {default: $___46__46__47_lib_47_addon__}).default;
var PWM = function PWM() {
  $traceurRuntime.superCall(this, $PWM.prototype, "constructor", ['PWM0']);
  addon.init(this.pins[0]);
};
var $PWM = PWM;
($traceurRuntime.createClass)(PWM, {write: function(value) {
    if (!this.alive) {
      throw new Error('Attempted to write to a destroyed peripheral');
    }
    if (typeof value != 'number' || value < 0 || value > 1024) {
      throw new Error('Invalid PWM value ' + value);
    }
    addon.write(this.pins[0], value);
  }}, {}, Peripheral);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci85Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQTtBQ3hCQSxLQUFLLGlCQUFpQixBQUFDLENBQUMsT0FBTTtLQ0E5QixFQUFDLEdBQUUsWUNBcUI7QUFBRSxnQkFBd0I7SUFBRSxBREE5QixDQUFDO0FFQXZCLFdBQVMsQ0NBVCxFQUFDLEtBQUksQ0RBTyxLQUFHLEFDQVMsQ0FBQztDSkF5QixDQUFDOzs7RUR3QjFDLFdBQVMsRU14QmxCLEVBQUMsMEJBQW9CLENBQUEsT0FBTSxBQUFDLG9CQUFrQixDQUN0QyxDQUFBLDJCQUFxQixvQ0FBMkIsQ0FBQSwyQkFBcUIsR0FBSyxFQUFDLE9BQU0sMEJBQW1CLENBRDlELEFBQytELENBQUM7RU53QnZHLE1BQUksRU16QlgsRUFBQywrQkFBb0IsQ0FBQSxPQUFNLEFBQUMsZ0JBQWtCLENBQ3RDLENBQUEsZ0NBQXFCLHlDQUEyQixDQUFBLGdDQUFxQixHQUFLLEVBQUMsT0FBTSwrQkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBQ0Q5RyxBQUFJLEVBQUEsTVAyQkcsU0FBTSxJQUFFLENBQ0YsQUFBQyxDQUFFO0FRNUJoQixBUjZCSSxnQlE3QlUsVUFBVSxBQUFDLHVDUjZCZixNQUFLLEVRNUJxQyxDUjRCbkM7QUFDYixNQUFJLEtBQUssQUFBQyxDQUFDLElBQUcsS0FBSyxDQUFFLENBQUEsQ0FBQyxDQUFDLENBQUM7QU85QlksQVArQnRDLENPL0JzQztBRUF4QyxBQUFJLEVBQUEsV0FBb0MsQ0FBQTtBQ0F4QyxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUMsT1ZpQzNCLEtBQUksQ0FBSixVQUFNLEtBQUksQ0FBRztBQUNYLE9BQUksQ0FBQyxJQUFHLE1BQU0sQ0FBRztBQUNmLFVBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyw4Q0FBNkMsQ0FBQyxDQUFDO0lBQ2pFO0FBQUEsQUFDQSxPQUFJLE1BQU8sTUFBSSxDQUFBLEVBQUssU0FBTyxDQUFBLEVBQUssQ0FBQSxLQUFJLEVBQUksRUFBQSxDQUFBLEVBQUssQ0FBQSxLQUFJLEVBQUksS0FBRyxDQUFHO0FBQ3pELFVBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyxvQkFBbUIsRUFBSSxNQUFJLENBQUMsQ0FBQztJQUMvQztBQUFBLEFBQ0EsUUFBSSxNQUFNLEFBQUMsQ0FBQyxJQUFHLEtBQUssQ0FBRSxDQUFBLENBQUMsQ0FBRyxNQUFJLENBQUMsQ0FBQztFQUNsQyxNQWR1QixXQUFTLENVMUJzQjtBVjBDeEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNCBCcnlhbiBIdWdoZXMgPGJyeWFuQHRoZW9yZXRpY2FsaWRlYXRpb25zLmNvbT4gKGh0dHA6Ly90aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCB7IFBlcmlwaGVyYWwgfSBmcm9tICdyYXNwaS1wZXJpcGhlcmFsJztcbmltcG9ydCBhZGRvbiBmcm9tICcuLi9saWIvYWRkb24nO1xuXG5leHBvcnQgY2xhc3MgUFdNIGV4dGVuZHMgUGVyaXBoZXJhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdQV00wJyk7XG4gICAgYWRkb24uaW5pdCh0aGlzLnBpbnNbMF0pO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCB2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxMDI0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUFdNIHZhbHVlICcgKyB2YWx1ZSk7XG4gICAgfVxuICAgIGFkZG9uLndyaXRlKHRoaXMucGluc1swXSwgdmFsdWUpO1xuICB9XG59XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCAkX19wbGFjZWhvbGRlcl9fMCk7Iiwie2dldDogJF9fcGxhY2Vob2xkZXJfXzB9IiwiZ2V0ICRfX3BsYWNlaG9sZGVyX18wKCkgeyByZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzE7IH0iLCJfX2VzTW9kdWxlOiB0cnVlIiwie3ZhbHVlOiAkX19wbGFjZWhvbGRlcl9fMH0iLCIoJF9fcGxhY2Vob2xkZXJfXzAgPSByZXF1aXJlKCRfX3BsYWNlaG9sZGVyX18xKSwgXG4gICAgICAgICRfX3BsYWNlaG9sZGVyX18yICYmICRfX3BsYWNlaG9sZGVyX18zLl9fZXNNb2R1bGUgJiYgJF9fcGxhY2Vob2xkZXJfXzQgfHwge2RlZmF1bHQ6ICRfX3BsYWNlaG9sZGVyX181fSkiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIiR0cmFjZXVyUnVudGltZS5zdXBlckNhbGwoJF9fcGxhY2Vob2xkZXJfXzAsICRfX3BsYWNlaG9sZGVyX18xLCAkX19wbGFjZWhvbGRlcl9fMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIiwidmFyICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzEiLCIoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKSgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9