registerPaint('checkbox', class {
    static get inputProperties() {
        return ['--checkbox-color', '--checkbox-radius','--checkbox-status'];
    }
    paint(ctx, geom, properties) {
        // get css vars
        let statusProp = properties.get('--checkbox-status');
        let colorProp = properties.get('--checkbox-color');
        // let radiusProp = properties.get('--checkbox-radius'); // TODO radius
        // TODO resize checkbox
        
        // convert them
        const status = statusProp ? statusProp.cssText.trim() === 'true' : false;
        const color = colorProp ? colorProp.cssText : 'gray';
        
        ctx.fillStyle = color;

        // Determine the center point and radius.
        const x = geom.width / 2;
        const y = geom.height / 2;
        //const radius = Math.min(x, y);
        
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        // box
        ctx.beginPath();
        ctx.arc(10, 10, 10, Math.PI, Math.PI * 1.5);
        ctx.moveTo(10, 0);
        ctx.lineTo(30, 0);

        ctx.lineTo(40, 10);
        ctx.arc(30, 10, 10, Math.PI * 1.5, 0);
        ctx.lineTo(40, 30);

        ctx.lineTo(30, 40);
        ctx.arc(30, 30, 10, Math.PI * 2, Math.PI * 0.5);
        ctx.lineTo(10, 40);

        ctx.lineTo(0, 30);
        ctx.arc(10, 30, 10, Math.PI * 0.5, Math.PI * 1);
        ctx.lineTo(0, 10);

        ctx.closePath();
        ctx.fill();
        
        // remove shadow
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;

        if (status) {
            // tick
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(10, 18);
            ctx.lineTo(20, 28);
            ctx.lineTo(30, 10);
            ctx.strokeStyle = "white";
            ctx.stroke();
        }
    }
});